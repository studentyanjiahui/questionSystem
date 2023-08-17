package com.example.myquestionnaire.servicempl;

import com.example.myquestionnaire.RequestObject.RequestAnswer;
import com.example.myquestionnaire.RequestObject.RequestNaire;
import com.example.myquestionnaire.util.JuanAnalyze;
import com.example.myquestionnaire.util.NewJuan;
import com.example.myquestionnaire.util.QuesInfo;
import com.example.myquestionnaire.util.naireInfo;

import java.util.List;

public interface QuestionServiceMpl {
    List<naireInfo> getAllNaire();

    boolean delRecord(int id,String title);

    boolean insertRecord(RequestNaire requestNaire);

    List<QuesInfo> getOneQues(int Qid);

    Integer searchID(RequestNaire requestNaire);

    boolean addJuanList(List<NewJuan> oneList);

    List<JuanAnalyze> getAnalyze(int id);

    boolean addAnswers(List<RequestAnswer> requestAnswers);
}
