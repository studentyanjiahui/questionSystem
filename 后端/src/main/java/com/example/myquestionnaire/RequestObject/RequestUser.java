package com.example.myquestionnaire.RequestObject;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RequestUser {
    private String name;

    private String password;

}
