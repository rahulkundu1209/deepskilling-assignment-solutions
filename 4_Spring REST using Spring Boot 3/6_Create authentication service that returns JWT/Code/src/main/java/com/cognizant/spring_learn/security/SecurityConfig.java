package com.cognizant.spring_learn.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails admin = User.withUsername("admin")
				.password(passwordEncoder().encode("pwd"))
				.roles("ADMIN")
				.build();
		UserDetails user = User.withUsername("user")
				.password(passwordEncoder().encode("pwd"))
				.roles("USER")
				.build();
		return new InMemoryUserDetailsManager(admin, user);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		// Use BCryptPasswordEncoder for secure password encoding.
		return new BCryptPasswordEncoder();
	}

	@Bean
	   public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager authenticationManager) throws Exception {
		   http
			   .csrf(csrf -> csrf.disable())
			   .authorizeHttpRequests(auth -> auth
					  .requestMatchers("/authenticate").permitAll()
					  .requestMatchers("/countries").authenticated()
					  .anyRequest().permitAll()
			   )
			   .formLogin(Customizer.withDefaults())
			   .httpBasic(Customizer.withDefaults())
			   .addFilterBefore(new JwtAuthorizationFilter(authenticationManager), UsernamePasswordAuthenticationFilter.class);
		   return http.build();
	   }
}
