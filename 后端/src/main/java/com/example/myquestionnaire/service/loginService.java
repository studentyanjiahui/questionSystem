package com.example.myquestionnaire.service;

import com.example.myquestionnaire.mapper.loginMapper;
import com.example.myquestionnaire.servicempl.loginServiceMpl;
import com.example.myquestionnaire.util.userInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class loginService implements loginServiceMpl {

    @Autowired
    loginMapper loginMapper;

    @Override
    public userInfo getUserInfoByName(String name, String pswd) {
        try{
            userInfo userInfo1=loginMapper.getUserInfoByName(name,pswd);
            return userInfo1;
        }catch (Exception er){
            System.out.println(er.getMessage());
            return null;
        }
    }

    @Override
    public boolean addUserInfo(userInfo user) {
        try{
            loginMapper.addUserInfo(user);
            return true;
        }catch (Exception er){
            System.out.println(er.getMessage());
            return false;
        }
    }

}
