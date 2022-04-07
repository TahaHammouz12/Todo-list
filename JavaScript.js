$(document).ready(function() {

    function CountDown(id, task,counter) {
        // Set the date we're counting down to
        var countDownDate = new Date();
        countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(counter)); //8m could read from form
        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;
 
            // Time calculations for days, hours, minutes and seconds
           // var days = 0;
           // var hours = 0;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in an element
            $('#' + id + '>p').html("will expire in " + ''+minutes + "m " + seconds + "s " );
            // If the count down is over
            if (distance < 0) {
                clearInterval(x);
                $("#expiredList").append('<li class="list-group-item "><span class="crossed">'  + task + '</span><p class="list-date">Expired</p></li>')
                $("#expiredList").addClass('category-box-done border-2')
                $('#' + id).detach();
            
            }
        }, 1000);
    }

    
    $('#addTask').click(function() {
        var task = $('#FormControlInput1').val();
        var counter = $('#counter').val();
        if (counter === '') { //constructor
            counter = 8;    
        }
        var id = Math.random().toString(36).slice(2);

        $("#activeList").append('<li id="' + id + '" class="list-group-item"> <span >' + task + '</span> <p class="list-date count">'+counter+'</p></li>') // start min could be dynamic
        $("#activeList").addClass('category-box border-2')
        

        CountDown(id, task,counter)

    })

      


});