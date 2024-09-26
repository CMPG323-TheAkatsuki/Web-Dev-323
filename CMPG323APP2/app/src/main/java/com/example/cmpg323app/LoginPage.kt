package com.example.cmpg323app

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.mongodb.kotlin.client.MongoClient

class LoginPage : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.loginpage)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        MongoConnect()

    }

    fun MongoConnect(){
        MongoClient

        val uri = "mongodb+srv://Fanie:1111@cluster0.pzujk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

        val Mongo: MongoClient = MongoClient.create(uri)
        Mongo.close()
    }
}