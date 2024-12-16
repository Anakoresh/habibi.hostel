function redirectToIBE(event) {
  event.preventDefault();

  const checkIn = document.getElementById("room-check-in").value;
  const checkOut = document.getElementById("room-check-out").value;

  if (!checkIn || !checkOut) {
    alert("Please select both check-in and check-out dates.");
    return;
  }

  const hostelIdRoomId =
    "bSp15b42f200a54001b&selectedrooms=bSped1e8f370ba623ef";
  const baseUrl = `https://ibe.sabeeapp.com/properties/Habibi-Hostel-booking/`;
  const url = `${baseUrl}?p=${hostelIdRoomId}&checkin=${checkIn}&checkout=${checkOut}`;

  window.location.href = url;
}
