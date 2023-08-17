package com.example.myquestionnaire;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class MyQuestionnaireApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyQuestionnaireApplication.class, args);
    }

}
