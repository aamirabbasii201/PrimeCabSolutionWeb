import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase";

function Admin() {
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        fetchMessages();
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLoginData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setLoginError("");
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
    } catch (error) {
      console.error(error);
      setLoginError("Invalid email or password.");
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const messagesQuery = query(
        collection(db, "contactMessages"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(messagesQuery);

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(list);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <section className="adminLoginPage">
        <form className="adminLoginCard" onSubmit={handleLogin}>
          <h1>Admin Login</h1>
          <p>Login to view contact form submissions.</p>

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={loginData.email}
            onChange={handleLoginChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
          />

          {loginError && <span className="adminError">{loginError}</span>}

          <button type="submit">Login</button>
        </form>
      </section>
    );
  }

  return (
    <section className="adminPage">
      <div className="adminTopBar">
        <div>
          <span className="sectionLabel">Admin Dashboard</span>
          <h1>Contact Form Submissions</h1>
        </div>

        <div className="adminActions">
          <button type="button" onClick={fetchMessages}>
            Refresh
          </button>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <p className="adminLoading">Loading messages...</p>
      ) : (
        <div className="adminTableWrap">
          <table className="adminTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((item) => (
                <tr key={item.id}>
                  <td>{item.name || "-"}</td>
                  <td>{item.email || "-"}</td>
                  <td>{item.company || "-"}</td>
                  <td>{item.phone || "-"}</td>
                  <td>{item.message || "-"}</td>
                  <td>
                    {item.createdAt?.toDate
                      ? item.createdAt.toDate().toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))}

              {messages.length === 0 && (
                <tr>
                  <td colSpan="6">No messages found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Admin;