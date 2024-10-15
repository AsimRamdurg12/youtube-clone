export const API_KEY = "AIzaSyBApe98ecWdo_JbtZuFRTMxA4q32ZeTRkE";

export const valueConverter = (val) => {
if(val >= 1000000) {
    return Math.floor(val/1000000)+"M"
}

else if(val >= 1000 || val< 1000000) {
    return Math.floor(val/1000)+"K"
}

else if(val < 1000){
    return val;
}

else {
    return 0;
}

}