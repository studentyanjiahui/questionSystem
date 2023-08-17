package com.example.myquestionnaire.mapper;

import com.example.myquestionnaire.util.userInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface loginMapper {

    userInfo getUserInfoByName(String name,String pswd);

    boolean addUserInfo(userInfo user);

}
