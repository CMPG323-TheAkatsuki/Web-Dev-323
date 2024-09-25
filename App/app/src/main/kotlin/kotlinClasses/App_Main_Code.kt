package kotlinClasses

import android.os.*
import androidx.appcompat.app.AppCompatActivity
import com.example.app.R



class App_Main_Code : AppCompatActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.upload_video)

            //make mongodb connection
            // connectionstring
            val uri = "mongodb+srv://defaultuser:1115@cluster0.pzujk.mongodb.net/"

            //add test assignment

            //code for video upload form
            //button assigned
            val returnAssBut = findViewById<android.widget.Button>(R.id.returnAssButton1)
            returnAssBut.setOnClickListener{
                setContentView(R.layout.view_assignments)
            }

            val uploadBut = findViewById<android.widget.Button>(R.id.uploadButton)
            uploadBut.setOnClickListener{

            }
        }
}

