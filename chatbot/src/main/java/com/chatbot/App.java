package com.chatbot;

import java.util.Scanner;;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {  Client client = new Client();

    
  
        Scanner sc = new Scanner(System.in);
        System.out.println("Welome to Java  Chat bot ");
     System.out.println("Ask something :");
       String mess = sc.nextLine();

     GenerateContentResponse response =
        client.models.generateContent(
            "gemini-3-flash-preview",
            mess,
            null);
            System.out.println(response.text());
   
    }
}
