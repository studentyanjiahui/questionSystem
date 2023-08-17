package com.example.myquestionnaire.util;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class QuesInfo {
    private int id;

    //显示当前问题编号
    private int num;

    private String question;

    //展示问题类别
    private short type;

    private String option1;

    private String option2;

    private String option3;

    private String option4;

    private String option5;

    private String answer;
}
