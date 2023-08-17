package com.example.myquestionnaire.controller;

import com.example.myquestionnaire.service.loginService;
import com.example.myquestionnaire.util.Constants;
import com.example.myquestionnaire.util.Result;
import com.example.myquestionnaire.util.userInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.myquestionnaire.RequestObject.RequestUser;

@RestController
@RequestMapping("/address")
public class loginController {

    @Autowired
    private loginService loginservice;
    @PostMapping("/login")
    public Result loginProcess(@RequestBody RequestUser requestUser){
        userInfo user= loginservice.getUserInfoByName(requestUser.getName(),requestUser.getPassword());
        if(user==null){
            return Result.error(Constants.CODE_400,"用户名或密码错误");
        }else {
            return Result.success(user);
        }
    }

    @RequestMapping("/test")
   public Object test(String name){
            return "测试名为"+name;
   }

    @PostMapping("/register")
    public Result registerProcess(@RequestBody RequestUser requestUser){
         userInfo userInfo = new userInfo(0,requestUser.getName(),requestUser.getPassword());
         boolean isTrue = loginservice.addUserInfo(userInfo);
         if(isTrue){
             return  Result.success();
         }else {
             return Result.error(Constants.CODE_400,"该账户已被注册");
         }
    }
}
