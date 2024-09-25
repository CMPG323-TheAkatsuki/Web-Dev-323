package kotlinClasses

data class Assignment(val lecturer: String = "Lecturer name not given",
                      val moduleCode: String = "Code not Given",
                      val descOfAssignment: String = "Description not given",
                      val maxMark: Int = 10,
                      val weight: Int = 100)
{

}
