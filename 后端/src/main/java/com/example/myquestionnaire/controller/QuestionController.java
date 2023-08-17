package com.example.myquestionnaire.controller;

import com.example.myquestionnaire.RequestObject.RequestAnswer;
import com.example.myquestionnaire.RequestObject.RequestId;
import com.example.myquestionnaire.RequestObject.RequestNaire;
import com.example.myquestionnaire.service.QuestionService;
import com.example.myquestionnaire.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/naires")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/getAll")
    public Result getAllNaires(){
        try{
            List<naireInfo> listNaire= questionService.getAllNaire();
            return Result.success(listNaire);
        }catch (Exception er){
            System.out.println(er.getMessage());
            return Result.error(Constants.CODE_401,"服务器出错");
        }
    }

    @PostMapping("/insert")
    public Result InsertRecord(@RequestBody RequestNaire requestNaire){
        boolean ifInsert = questionService.insertRecord(requestNaire);
        if(ifInsert){
            int kl = questionService.searchID(requestNaire);
            if(kl>0){
                responseInt intkl =new responseInt(kl);
                return Result.success(intkl);
            }else return Result.error(Constants.CODE_400,"编号分配错误");
        }else {
            return Result.error(Constants.CODE_400,"数据库操作失败");
        }
    }

    @PostMapping("/del")
    public Result delRecord(@RequestBody RequestId data){
        boolean ifRight = questionService.delRecord(data.getId(),data.getTitle());
        System.out.println(ifRight);
        if(ifRight){
            return Result.success();
        }else {
            return Result.error(Constants.CODE_400,"删除失败");
        }
    }

    @GetMapping("getOne/{quesId}")
    public Result getOneQues(@PathVariable int quesId){
       List<QuesInfo> QuesList = questionService.getOneQues(quesId);
       if(QuesList == null){
           return Result.error(Constants.CODE_500,"空问卷");
       }else {
           return Result.success(QuesList);
       }
    }

    @PostMapping("/createNew")
    public Result createNewJuan(@RequestBody List<NewJuan> listSum ){
        boolean successIf = questionService.addJuanList(listSum);
        if(successIf){
            return Result.success();
        }else{
            return Result.error(Constants.CODE_401,"数据库添加错误");
        }
    }

    @GetMapping("/analyze/{JuanID}")
    public Result analyzeJuan(@PathVariable int JuanID){
        List<JuanAnalyze> juanAnalyze = questionService.getAnalyze(JuanID);
        if(juanAnalyze == null){
            return Result.error(Constants.CODE_401,"空问卷");
        }else{
            return Result.success(juanAnalyze);
        }
    }

    @PostMapping("/answerAdd")
    public Result addAnswer(@RequestBody List<RequestAnswer> requestAnswers){
         boolean successIf = questionService.addAnswers(requestAnswers);
         if(successIf){
             return Result.success();
         }else {
             return Result.error(Constants.CODE_401,"数据库错误");
         }
    }
}
