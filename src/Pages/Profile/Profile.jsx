import React from "react";
import "./Profile.css";
import {
  User,
  Mail,
  Phone,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  CheckCircle
} from "lucide-react";

const Profile = () => {
  return (
    <div className="page">

      <div className="profile-container">

        {/* Title */}
        <h2 className="page-title">Profile</h2>

        {/* Profile Card */}
        <div className="card profile-card">

          <div className="profile-top">

            <div className="avatar-wrapper">

              <div className="avatar">
                <User size={28} />
              </div>

              <div className="verified">
                <CheckCircle size={18} />
              </div>

            </div>

            <div className="profile-text">

              <div className="name-row">

                <h3 className="name">
                 Dnyaneshwar Argade
                </h3>

                <span className="active-badge">
                  Active
                </span>

              </div>

              <div className="role">
                Admin
              </div>

            </div>

          </div>

          <div className="profile-info">

            <div className="info-row">
              <Mail size={20} />
              <span>argade@admin.com</span>
            </div>

            <div className="info-row">
              <Phone size={20} />
              <span>5946595653</span>
            </div>

          </div>

        </div>


        {/* Menu Card */}
        <div className="card menu-card">

          <div className="menu-row">
            <Settings size={20} />
            <span>Settings</span>
          </div>

          <div className="menu-row">
            <Bell size={20} />
            <span>Notifications</span>
          </div>

          <div className="menu-row">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </div>

          <div className="menu-row logout">
            <LogOut size={20} />
            <span>Logout</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;


