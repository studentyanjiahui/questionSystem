package com.example.myquestionnaire.util;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class responseInt {
    private int id;

   public responseInt(int id){
       this.id=id;
    }
}
