package com.example.myquestionnaire.mapper;

import com.example.myquestionnaire.RequestObject.RequestAnswer;
import com.example.myquestionnaire.RequestObject.RequestNaire;
import com.example.myquestionnaire.util.JuanAnalyze;
import com.example.myquestionnaire.util.NewJuan;
import com.example.myquestionnaire.util.QuesInfo;
import com.example.myquestionnaire.util.naireInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface QuestionMapper {
    List<naireInfo> getAllNaire();

    boolean delRecord(int id,String title);

    boolean insertRecord(RequestNaire requestNaire);

    List<QuesInfo> getOneQues(int Qid);

    Integer searchID(RequestNaire requestNaire);

    boolean addOneJuan(NewJuan oneList);

    List<JuanAnalyze> getAnalyze(int id);

    boolean addOneAnswer(RequestAnswer requestAnswer);
}
