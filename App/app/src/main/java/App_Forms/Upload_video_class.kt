package App_Forms

import App_Forms.R
import com.google.android.material.floatingactionbutton.FloatingActionButton
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import android.os.*
import android.widget.*

class Upload_video_class : AppCompatActivity(){

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        //sets main view to the upload_video.xml
        setContentView(R.layout.upload_video)

        // sets the buttons ID to the floating buttons id
        val uploadBut = findViewById<FloatingActionButton>(R.id.uploadButton)
        val uploadTxt = findViewById<TextView>(R.id.uploadText)

        // Sets up a fun to check if button is clicked
        uploadBut.setOnClickListener {
            uploadTxt.text = "New text"

        }

    }


}