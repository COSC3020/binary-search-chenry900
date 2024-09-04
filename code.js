function binarySearch(list, element) {
    for(i = 0; i < list; i++)
        if(element == list[i])
            return i;
    return -1;
}
