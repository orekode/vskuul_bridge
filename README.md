# **Iomad School Management System**

The Iomad School Management System is a multitenancy platform that allows vskuul to register schools as companies, provide login details, and manage user access efficiently. This document outlines the steps required to deploy and configure the system on your servers.

---

## **Features**
- Multitenancy support for managing multiple schools.
- Role-based access control for administrators, teachers, and students.
- Customizable dashboards and settings for each tenant.

---

## **Prerequisites**
Before starting, ensure the following are available:

1. **Server Requirements**:
   - A Linux-based web server (Ubuntu 20.04 or higher recommended).
   - PHP 7.4 or higher.
   - MySQL 5.7 or PostgreSQL 9.6 or higher.

2. **Dependencies**:
   - Web server (Apache or Nginx).
   - PHP extensions:
     - `intl`
     - `curl`
     - `gd`
     - `mbstring`
     - `xml`
     - `zip`

3. **Tools**:
   - Git installed on the server.
   - Composer for managing PHP dependencies.

---

## **Setup Instructions**

### **1. Clone the Repository**
1. SSH into your server.
2. Navigate to the directory where you want to deploy the application.
3. Clone the repository using:
   ```bash
   git clone https://<your_username>:<your_token>@github.com/orekode/vskuul_final.git
   ```
4. Navigate into the project folder:
   ```bash
   cd iomad-school-management
   ```

create a database with the secure credentials and fill in the credentials into the right variables in the config.php file at root
```
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'example_vskuul';
$CFG->dbuser    = 'example_user';
$CFG->dbpass    = 'expamplePass@123';
```

populate the database with the contents for ```db.sql``` at root