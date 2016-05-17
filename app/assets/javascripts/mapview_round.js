
$( document ).ready(function() {
        // 지도에 표시할 원을 생성합니다
        var circle = new daum.maps.Circle({
            center : new daum.maps.LatLng(  ),
            
            // 원의 중심좌표 입니다 
            radius: 8, // 미터 단위의 원의 반지름입니다 
            strokeWeight: 5, // 선의 두께입니다 
            strokeColor: '#75B8FA', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'dashed', // 선의 스타일 입니다
            fillColor: '#CFE7FF', // 채우기 색깔입니다
            fillOpacity: 0.7  // 채우기 불투명도 입니다   
        }); 
        
        // 지도에 원을 표시합니다 
        circle.setMap(map); 
});

