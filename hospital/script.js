const doctors = {

    "Cardiology": [

        {
            name: "Dr. Ahmed Khan",
            timing: "9:00 AM – 1:00 PM",
            room: "105",
            floor: "1st Floor",
            waiting: "Cardiology Waiting Area",
            rating: 4.8,
            reviews: 127,
            comments: [
                "Doctor explained everything very clearly.",
                "Very professional and friendly.",
                "The appointment experience was good."
            ]
        },

        {
            name: "Dr. Sara Malik",
            timing: "2:00 PM – 6:00 PM",
            room: "106",
            floor: "1st Floor",
            waiting: "Cardiology Waiting Area",
            rating: 4.5,
            reviews: 94,
            comments: [
                "Very patient and helpful doctor.",
                "Good communication with patients.",
                "The staff was cooperative."
            ]
        }

    ],


    "Neurology": [

        {
            name: "Dr. Hassan Ali",
            timing: "10:00 AM – 2:00 PM",
            room: "112",
            floor: "1st Floor",
            waiting: "Neurology Waiting Area",
            rating: 4.7,
            reviews: 113,
            comments: [
                "Doctor listened carefully.",
                "Very professional experience.",
                "Explained the treatment properly."
            ]
        },

        {
            name: "Dr. Maria Shah",
            timing: "3:00 PM – 7:00 PM",
            room: "113",
            floor: "1st Floor",
            waiting: "Neurology Waiting Area",
            rating: 4.4,
            reviews: 82,
            comments: [
                "Friendly and respectful.",
                "Good consultation experience.",
                "The doctor answered my questions."
            ]
        }

    ],


    "General Medicine": [

        {
            name: "Dr. Ayesha Khan",
            timing: "9:00 AM – 3:00 PM",
            room: "118",
            floor: "1st Floor",
            waiting: "General Medicine Waiting Area",
            rating: 4.9,
            reviews: 156,
            comments: [
                "Excellent communication.",
                "Very caring doctor.",
                "Overall great experience."
            ]
        },

        {
            name: "Dr. Bilal Ahmed",
            timing: "4:00 PM – 8:00 PM",
            room: "119",
            floor: "1st Floor",
            waiting: "General Medicine Waiting Area",
            rating: 4.3,
            reviews: 71,
            comments: [
                "Good doctor and helpful staff.",
                "Doctor was very polite.",
                "The consultation was useful."
            ]
        }

    ],


    "Radiology": [

        {
            name: "Dr. Hamza Ahmed",
            timing: "11:00 AM – 4:00 PM",
            room: "204",
            floor: "2nd Floor",
            waiting: "Radiology Waiting Area",
            rating: 4.6,
            reviews: 101,
            comments: [
                "Very professional.",
                "Instructions were easy to understand.",
                "Good experience overall."
            ]
        },

        {
            name: "Dr. Noor Fatima",
            timing: "5:00 PM – 8:00 PM",
            room: "205",
            floor: "2nd Floor",
            waiting: "Radiology Waiting Area",
            rating: 4.2,
            reviews: 65,
            comments: [
                "Very polite staff.",
                "The process was smooth.",
                "Doctor was helpful."
            ]
        }

    ],


    "Laboratory": [

        {
            name: "Dr. Usman Raza",
            timing: "8:00 AM – 1:00 PM",
            room: "210",
            floor: "2nd Floor",
            waiting: "Laboratory Waiting Area",
            rating: 4.5,
            reviews: 88,
            comments: [
                "Fast and organized service.",
                "Very helpful staff.",
                "Good overall experience."
            ]
        },

        {
            name: "Dr. Hira Khan",
            timing: "2:00 PM – 6:00 PM",
            room: "211",
            floor: "2nd Floor",
            waiting: "Laboratory Waiting Area",
            rating: 4.7,
            reviews: 96,
            comments: [
                "Very professional.",
                "Everything was explained clearly.",
                "Good patient care."
            ]
        }

    ]

};



const department =
    document.getElementById("department");


const doctor =
    document.getElementById("doctor");



/* CHANGE DOCTORS WHEN DEPARTMENT CHANGES */

department.addEventListener("change", function () {

    const selectedDepartment =
        department.value;


    doctor.innerHTML = "";


    if (selectedDepartment === "") {

        doctor.innerHTML =
            "<option>Select department first</option>";

        return;

    }


    doctor.innerHTML =
        "<option value=''>Select doctor</option>";


    doctors[selectedDepartment].forEach(
        function(item, index) {

            const option =
                document.createElement("option");

            option.value = index;

            option.textContent =
                item.name;

            doctor.appendChild(option);

        }
    );

});



/* FIND APPOINTMENT */

function findAppointment() {

    const patientName =
        document.getElementById("patientName").value.trim();


    const currentLocation =
        document.getElementById("currentLocation").value;


    const selectedDepartment =
        department.value;


    const selectedDoctor =
        doctor.value;


    const result =
        document.getElementById("appointmentResult");


    if (
        patientName === "" ||
        currentLocation === "" ||
        selectedDepartment === "" ||
        selectedDoctor === ""
    ) {

        result.innerHTML = `

            <div class="result-card">

                <h3>
                    ⚠️ Missing Information
                </h3>

                <p>
                    Please enter all information
                    before finding your appointment.
                </p>

            </div>

        `;

        return;

    }


    const doctorData =
        doctors[selectedDepartment][selectedDoctor];


    const route =
        createRoute(
            currentLocation,
            doctorData.floor,
            doctorData.waiting
        );


    let routeHTML = "";


    route.forEach(function(location, index) {

        routeHTML += `

            <div class="route-step">

                <div class="route-number">
                    ${index + 1}
                </div>

                <strong>
                    ${location}
                </strong>

            </div>

        `;

    });


    const stars =
        createStars(doctorData.rating);


    result.innerHTML = `

        <div class="result-card">

            <h3>
                👋 Hello ${patientName}
            </h3>


            <div class="patient-message">

                Your appointment is with

                <strong>
                    ${doctorData.name}
                </strong>.

                Please follow the route
                and wait in your department's
                waiting area.

            </div>


            <div class="doctor-information">


                <div class="info-box">

                    <span>
                        DEPARTMENT
                    </span>

                    <strong>
                        ${selectedDepartment}
                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        DOCTOR
                    </span>

                    <strong>
                        ${doctorData.name}
                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        TIMING
                    </span>

                    <strong>
                        ${doctorData.timing}
                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        ROOM
                    </span>

                    <strong>
                        Room ${doctorData.room}
                    </strong>

                </div>


            </div>



            <div class="rating-box">

                <div class="stars">
                    ${stars}
                </div>

                <div class="rating-text">

                    ${doctorData.rating}
                    / 5

                    ·

                    ${doctorData.reviews}
                    patient reviews

                </div>

            </div>



            <div class="review-section">

                <h4>
                    Patient Reviews
                </h4>


                ${doctorData.comments.map(
                    function(comment, index) {

                        return `

                            <div class="review">

                                <strong>
                                    Patient ${index + 1}
                                </strong>

                                <p>
                                    "${comment}"
                                </p>

                            </div>

                        `;

                    }
                ).join("")}


            </div>



            <h3 class="route-title">
                🧭 Your Route
            </h3>


            ${routeHTML}


            <div class="patient-message">

                🪑

                <strong>
                    Important:
                </strong>

                Please wait at

                <strong>
                    ${doctorData.waiting}
                </strong>.

                Your doctor is in

                <strong>
                    Room ${doctorData.room}
                </strong>.

            </div>


            <button
                class="save-button"
                onclick="saveAppointment()"
            >
                💾 Save This Appointment
            </button>


        </div>

    `;


    window.currentAppointment = {

        patientName: patientName,

        currentLocation: currentLocation,

        department: selectedDepartment,

        doctor: doctorData.name,

        timing: doctorData.timing,

        room: doctorData.room,

        floor: doctorData.floor,

        waiting: doctorData.waiting,

        rating: doctorData.rating

    };


    result.scrollIntoView({
        behavior: "smooth"
    });

}



/* CREATE ROUTE */

function createRoute(
    currentLocation,
    floor,
    waitingArea
) {

    let route = [];


    route.push(currentLocation);


    if (
        currentLocation !== "Reception" &&
        currentLocation !== "1st Floor" &&
        currentLocation !== "2nd Floor"
    ) {

        route.push("Reception");

    }


    if (floor === "1st Floor") {

        if (currentLocation !== "1st Floor") {

            route.push(
                "Elevator → 1st Floor"
            );

        }

    }


    if (floor === "2nd Floor") {

        if (currentLocation !== "2nd Floor") {

            route.push(
                "Elevator → 2nd Floor"
            );

        }

    }


    route.push(waitingArea);


    return route;

}



/* CREATE STAR RATING */

function createStars(rating) {

    let stars = "";


    const rounded =
        Math.round(rating);


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if (i <= rounded) {

            stars += "★";

        } else {

            stars += "☆";

        }

    }


    return stars;

}



/* SAVE APPOINTMENT */

function saveAppointment() {

    if (!window.currentAppointment) {

        return;

    }


    let appointments =
        JSON.parse(
            localStorage.getItem(
                "carepointAppointments"
            )
        ) || [];


    appointments.push(
        window.currentAppointment
    );


    localStorage.setItem(
        "carepointAppointments",
        JSON.stringify(appointments)
    );


    alert(
        "Appointment saved successfully!"
    );


    displaySavedAppointments();

}



/* DISPLAY SAVED APPOINTMENTS */

function displaySavedAppointments() {

    const container =
        document.getElementById(
            "savedAppointments"
        );


    let appointments =
        JSON.parse(
            localStorage.getItem(
                "carepointAppointments"
            )
        ) || [];


    if (appointments.length === 0) {

        container.innerHTML = `

            <div class="no-appointments">

                📅

                <br><br>

                No saved appointments yet.

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    appointments.forEach(
        function(appointment, index) {

            const card =
                document.createElement("div");


            card.className =
                "saved-card";


            card.innerHTML = `

                <div>

                    <h3>
                        ${appointment.doctor}
                    </h3>

                    <p>
                        👤
                        ${appointment.patientName}
                    </p>

                    <p>
                        🏥
                        ${appointment.department}
                    </p>

                    <p>
                        🕐
                        ${appointment.timing}
                    </p>

                    <p>
                        🚪
                        Room ${appointment.room}
                    </p>

                    <p>
                        🪑
                        ${appointment.waiting}
                    </p>

                </div>


                <button
                    class="delete-button"
                    onclick="deleteAppointment(${index})"
                >
                    Delete
                </button>

            `;


            container.appendChild(card);

        }
    );

}



/* DELETE APPOINTMENT */

function deleteAppointment(index) {

    let appointments =
        JSON.parse(
            localStorage.getItem(
                "carepointAppointments"
            )
        ) || [];


    appointments.splice(index, 1);


    localStorage.setItem(
        "carepointAppointments",
        JSON.stringify(appointments)
    );


    displaySavedAppointments();

}



/* DISPLAY DOCTOR CARDS */

function displayDoctors() {

    const container =
        document.getElementById(
            "doctorCards"
        );


    Object.keys(doctors).forEach(
        function(departmentName) {

            doctors[departmentName].forEach(
                function(doctorData) {

                    const card =
                        document.createElement("div");


                    card.className =
                        "doctor-card";


                    card.innerHTML = `

                        <div class="doctor-top">

                            <div class="doctor-icon">
                                👨‍⚕️
                            </div>

                            <div class="stars">
                                ${createStars(
                                    doctorData.rating
                                )}
                            </div>

                        </div>


                        <h3>
                            ${doctorData.name}
                        </h3>


                        <div class="department-name">
                            ${departmentName}
                        </div>


                        <div class="doctor-details">


                            <div class="doctor-detail">

                                <span>
                                    TIMING
                                </span>

                                <strong>
                                    ${doctorData.timing}
                                </strong>

                            </div>


                            <div class="doctor-detail">

                                <span>
                                    ROOM
                                </span>

                                <strong>
                                    ${doctorData.room}
                                </strong>

                            </div>


                            <div class="doctor-detail">

                                <span>
                                    FLOOR
                                </span>

                                <strong>
                                    ${doctorData.floor}
                                </strong>

                            </div>


                            <div class="doctor-detail">

                                <span>
                                    REVIEWS
                                </span>

                                <strong>
                                    ${doctorData.reviews}
                                    patients
                                </strong>

                            </div>


                        </div>


                        <div class="doctor-rating">

                            <span class="stars">
                                ${createStars(
                                    doctorData.rating
                                )}
                            </span>

                            <strong>
                                ${doctorData.rating}
                                / 5
                            </strong>

                        </div>

                    `;


                    container.appendChild(card);

                }
            );

        }
    );

}



/* LOAD SAVED DATA WHEN PAGE OPENS */

displayDoctors();

displaySavedAppointments();