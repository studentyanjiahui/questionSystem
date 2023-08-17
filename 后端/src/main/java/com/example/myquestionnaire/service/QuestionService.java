package com.example.myquestionnaire.service;

import com.example.myquestionnaire.RequestObject.RequestAnswer;
import com.example.myquestionnaire.RequestObject.RequestNaire;
import com.example.myquestionnaire.mapper.QuestionMapper;
import com.example.myquestionnaire.servicempl.QuestionServiceMpl;
import com.example.myquestionnaire.util.JuanAnalyze;
import com.example.myquestionnaire.util.NewJuan;
import com.example.myquestionnaire.util.QuesInfo;
import com.example.myquestionnaire.util.naireInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService implements QuestionServiceMpl {

   @Autowired
   private QuestionMapper questionMapper;

    @Override
    public List<naireInfo> getAllNaire() {
        return questionMapper.getAllNaire();
    }

    @Override
    public boolean delRecord(int id,String title) {
        return questionMapper.delRecord(id,title);
    }

    @Override
    public boolean insertRecord(RequestNaire requestNaire){
        return questionMapper.insertRecord(requestNaire);
    }

    @Override
    public List<QuesInfo> getOneQues(int Qid){
        return questionMapper.getOneQues(Qid);
    }

    @Override
    public Integer searchID(RequestNaire requestNaire) {
        return questionMapper.searchID(requestNaire);
    }

    @Override
    public boolean addJuanList(List<NewJuan> oneList) {
        int index = 0;
        boolean signFlag = true;
        while(index < oneList.size()){
            signFlag = questionMapper.addOneJuan(oneList.get(index));
            index++;
            if(!signFlag){
                return false;
            }
        }
        return true;
    }

    @Override
    public List<JuanAnalyze> getAnalyze(int id) {
        return questionMapper.getAnalyze(id);
    }

    @Override
    public boolean addAnswers(List<RequestAnswer> requestAnswers) {
        boolean ifSuccess = true;
        for (RequestAnswer requestAnswer : requestAnswers) {
            ifSuccess = questionMapper.addOneAnswer(requestAnswer);
            if (!ifSuccess) {
                break;
            }
        }
        return ifSuccess;
    }
}
