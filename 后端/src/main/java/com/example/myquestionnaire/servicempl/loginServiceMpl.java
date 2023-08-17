package com.example.myquestionnaire.servicempl;

import com.example.myquestionnaire.util.userInfo;


public interface loginServiceMpl {
    userInfo getUserInfoByName(String name,String pswd);

    boolean addUserInfo(userInfo user);


}
