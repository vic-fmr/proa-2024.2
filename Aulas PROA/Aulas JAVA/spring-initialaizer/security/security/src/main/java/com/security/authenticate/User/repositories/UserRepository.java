package com.security.authenticate.User.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.security.authenticate.User.models.UserModel;


public interface UserRepository extends JpaRepository<UserModel, UUID>{
    UserDetails findByEmail(String email);
}