package org.example.entities;

public class AutInfo {
    private String email;
    private String password;

    public AutInfo() {
    }

    public AutInfo(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    

}
