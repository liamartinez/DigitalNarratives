    //Telling my page to load an event as soon as the DOM is loaded
        $(document).on( "pageshow", function() {
            // fetch the element called happy
            $('#happy')
            //.pan = apply the sprite method
            //fps: 12 = the animation should play at 30 frames per second
            //no_of_frames: 8 = there are 8 frames comprising this animation
            .sprite({fps: 8, no_of_frames: 8})
            //move the sprite around the screen randomly
            //constrain how far left, right, top, bottom it can go
            //speeds are in milliseconds (the lower the number the faster the animation)
            .spRandom({
            top: 70,
            left: 100,
            right: 200,
            bottom: 340,
            speed: 4000,
            pause: 3000
      });

            $('#hill').pan({fps: 30, speed: 2, dir: 'right'});
    });