// import React from "react";

// const Sidebar = () => {
//   const links = ["Dashboard", "Chatbot", "Inbox", "Enquiry", "Settings", "Master"];

//   return (
//     <div style={styles.sidebar}>
//       <div style={styles.logo}>
//         <img src="logo192.png" alt="Logo" style={{ width: "50px" }} />
//         <h3>chat Bot</h3>
//       </div>
//       <ul style={styles.nav}>
//         {links.map((link, index) => (
//           <li key={index} style={styles.navItem}>
//             {link}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   sidebar: {
//     width: "250px",
//     backgroundColor: "#5A67D8",
//     color: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     padding: "20px",
//   },
//   logo: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   nav: {
//     listStyleType: "none",
//     padding: 0,
//   },
//   navItem: {
//     margin: "10px 0",
//     cursor: "pointer",
//   },
// };

// export default Sidebar;

import React from "react";

export default function Sidebar() {
  const links = [
    // { name: "Dashboard", url: "/DashboardContent" },
    { name: "Chatbot", url: "/DashboardContent" },
    // { name: "Inbox", url: "/inbox" },
    { name: "Tickets", url: "/Tickets" },
    { name: "Callback Request", url: "/Callbackrequest" },
    { name: "Help", url: "/help" },
  ];

  return (
    <div>
      <div style={styles.sidebar}>
        <div style={styles.logo}>
          <img src="logo192.png" alt="Logo" style={{ width: "50px", borderRadius: "50%" }} />
          <h3 style={styles.logoText}>Chat Bot</h3>
        </div>
        <ul style={styles.nav}>
          {links.map((link, index) => (
            <li key={index} style={styles.navItem}>
              <a href={link.url} style={styles.navLink}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    background: "linear-gradient(180deg, #5A67D8 0%, #4C51BF 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  logoText: {
    marginLeft: "10px",
    fontSize: "24px",
    fontWeight: "600",
  },
  nav: {
    listStyleType: "none",
    padding: 0,
    marginTop: "30px",
  },
  navItem: {
    margin: "15px 0",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "500",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "10px",
    transition: "background-color 0.3s ease, padding-left 0.3s ease",
  },
  navLinkHover: {
    backgroundColor: "#4C51BF",
    paddingLeft: "20px",
  },
};


