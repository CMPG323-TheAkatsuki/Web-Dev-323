package kotlinClasses

import android.os.*
import androidx.appcompat.app.AppCompatActivity
import com.example.app.R
import com.mongodb.client.MongoClient
    import com.mongodb.client.MongoClients
import org.bson.Document

class App_Main_Code : AppCompatActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.upload_video)

            //make mongodb connection
            // connectionstring
            val uri = "mongodb+srv://<defaultuser>:<1115>@cluster0.pzujk.mongodb.net/"

            //Connect to correct part of database
            val client: MongoClient = MongoClients.create(uri)
            val database = client.getDatabase("serverDB")
            val collection = database.getCollection("Assignment")
            //add test assignment
            val Assignment1 = Assignment()
            val document = Document("Lecturer",Assignment1.lecturer).append("moduleCode",Assignment1.moduleCode).append("descOfAssignment",Assignment1.descOfAssignment).append("maxMark",Assignment1.maxMark).append("weight",Assignment1.weight)
            collection.insertOne(document)
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

