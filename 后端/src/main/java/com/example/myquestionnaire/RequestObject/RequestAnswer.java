package com.example.myquestionnaire.RequestObject;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RequestAnswer {
    private int id;

    private int num;

    private String answer;

    private String writer;
}
