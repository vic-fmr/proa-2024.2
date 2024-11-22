package com.security.authenticate.User.dtos;

import com.security.authenticate.User.enums.UserRole;
import jakarta.validation.constraints.NotNull;

public record RegisterDto(@NotNull String email,@NotNull String password, @NotNull UserRole role ) {

}