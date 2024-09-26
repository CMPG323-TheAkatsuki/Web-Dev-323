plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
}

android {
    namespace = "com.example.cmpg323app"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.cmpg323app"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    packaging{
        resources.merges.add("META-INF/native-image/org.mongodb/bson/native-image.properties")
        resources.merges.add("META-INF/native-image/native-image.properties")
        resources.merges.add("META-INF/native-image/reflect-config.json")
    }
    kotlinOptions {
        jvmTarget = "11"
    }
}

dependencies {

    implementation("org.mongodb:mongodb-driver-kotlin-sync:5.2.0")
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
    implementation(libs.androidx.activity)
    implementation(libs.androidx.constraintlayout)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
}