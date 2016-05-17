$( document ).ready(function() {

            // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
        var polygonPath = [
            new daum.maps.LatLng(),
            new daum.maps.LatLng(),
            new daum.maps.LatLng(),
            new daum.maps.LatLng(),
        ];
        
        // 지도에 표시할 다각형을 생성합니다
        var polygon = new daum.maps.Polygon({
            path:polygonPath, // 그려질 다각형의 좌표 배열입니다
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: '#39DE2A', // 선의 색깔입니다
            strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'longdash', // 선의 스타일입니다
            fillColor: '#A2FF99', // 채우기 색깔입니다
            fillOpacity: 0.7 // 채우기 불투명도 입니다
        });
        
        // 지도에 다각형을 표시합니다
        polygon.setMap(map);
        


             
});


$( document ).ready(function() {
        // 지도에 표시할 원을 생성합니다
        var circle = new daum.maps.Circle({
            center : new daum.maps.LatLng( 37.631606555272114, 127.07773023877921 ),
            
            // 원의 중심좌표 입니다 
            radius: 8, // 미터 단위의 원의 반지름입니다 
            strokeWeight: 5, // 선의 두께입니다 
            strokeColor: '#845C40', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'dashed', // 선의 스타일 입니다
            fillColor: '#845C40', // 채우기 색깔입니다
            fillOpacity: 0.7  // 채우기 불투명도 입니다   
        }); 
        
        // 지도에 원을 표시합니다 
        circle.setMap(map); 
    
                        var content = '<div class ="label" ><span class="left"></span><span class="center"><a href = "#mo9">⑨수)13~14시</a></span><span class="right"></span></div>';

        // 커스텀 오버레이가 표시될 위치입니다 
        var position = new daum.maps.LatLng(37.631606555272114, 127.07773023877921 );  
        
        // 커스텀 오버레이를 생성합니다
        var customOverlay = new daum.maps.CustomOverlay({
            position: position,
            content: content   
        });
        
        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
        


});