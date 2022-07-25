export default `
<div>
    <style>
            html, body {
                margin: 0;
            }

            #map {
                height: 100%;
                width: 100%;
            }
            .marker-border{
                // background-image: url('img/flower.jpg');
                border-radius: 50%;
                height: 80px;
                width: 80px;    
            }
            .marker-icon{
            //     background-position: center;
            //     background-size: 45px 45px;
                // border-radius: 50%;/
                // height: 45px;
                // width: 45px;
            }
    </style>
    
    <div id='map' class='map'></div>

    <!-- load TomTom Maps Web SDK from CDN -->
    <link rel='stylesheet' type='text/css' href='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps.css'/>
    <script src='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps-web.min.js'></script>

    <script>
        // create the map

        let border = document.createElement('div');
        border.className = 'marker-border';


        let icon = document.createElement('div');
        icon.className = 'marker-border'
        icon.innerHTML = "<img src='img/flower.jpg' style='width: 100px; height: 100px';>";

        border.appendChild(icon);

        tt.setProductInfo('TomTom Maps React Native Demo', '1.0');
        let map = tt.map({
            key: 'dWmh4PJx4HpqYDzTtCRdc9yuEdSvO3T0',
            container: 'map',
            center: [-121.913, 37.361],
            zoom: 15
        });  
        // var marker = new tt.Marker({element: border}).setLngLat([88.444781, 22.6292757]).addTo(map);

        map.on('dragend', function() {
            let center = map.getCenter();
            window.ReactNativeWebView.postMessage(center.lng.toFixed(3) + ", " + center.lat.toFixed(3));
        })
    </script>
</div>
`;