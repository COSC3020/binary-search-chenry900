function binarySearch(list, element) {
    var first = 0, last = (list.length - 1), middle = (first + last) /2;
    while (first <= last)
        {
            middle = (first + last) / 2;
            if (list[middle] == element)
                return middle;
            if (list[middle] < element)
                first = middle + 1;
            if (list[middle] > element)
                last = middle -1;
        }
    return -1;
}
