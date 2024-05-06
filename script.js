let seatsAvailable = 60;


function bookSeat() {
    if (seatsAvailable > 0) {
        seatsAvailable--;
        document.getElementById('seats').textContent = seatsAvailable;
        alert('Seat booked successfully!');
    } else {
        alert('No seats available!');
    }
}

function cancelSeat() {
    if (seatsAvailable < 60) {
        seatsAvailable++;
        document.getElementById('seats').textContent = seatsAvailable;
        alert('Seat canceled successfully!');
    } else {
        alert('No seats to cancel!');
    }
}

