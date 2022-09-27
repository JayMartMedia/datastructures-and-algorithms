#![crate_type="lib"]
use math::round;

fn binary_search (item: i32, array: &[i32], start_idx: Option<usize>, end_idx: Option<usize>) -> bool {
    // if no items in array, return false
    if array.len() == 0 {
        return false;
    }

    // if start and end pass each other, return false
    if start_idx > end_idx {
        return false
    }

    let start_idx = start_idx.unwrap_or(0);
    let end_idx = end_idx.unwrap_or(array.len() - 1);

    // find midpoint and item at midpoint
    let midpoint = round::ceil(((start_idx + end_idx)/2) as f64,0) as usize;
    let mid_item = array[midpoint];

    // compare item and item at midpoint
    if item == mid_item {
        // if item matches, return true
        return true;
    }else if item < mid_item {
        // if item is lesser, recursively call binary search on first half
        return binary_search(item, array, Some(start_idx), Some(midpoint - 1));
    }else{
        // if item is greater, recursively call binary search on second half
        return binary_search(item, array, Some(midpoint + 1), Some(end_idx));
    }
}

#[test]
fn returns_true_when_item_in_array_with_odd_array(){
    let item = 3;
    let array = [2,3,12,13,14];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, true);
}

#[test]
fn returns_true_when_item_in_array_with_even_array(){
    let item = 3;
    let array = [2,3,12,13];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, true);
}

#[test]
fn returns_true_when_item_in_array_first_item(){
    let item = 2;
    let array = [2,3,12,13];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, true);
}

#[test]
fn returns_true_when_item_in_array_last_item(){
    let item = 13;
    let array = [2,3,12,13];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, true);
}

#[test]
fn returns_true_when_item_in_array_multiple_times(){
    let item = 13;
    let array = [2,3,6,12,13,13,15];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, true);
}

#[test]
fn returns_false_when_item_not_in_array(){
    let item = 3;
    let array = [2,5,12,14];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, false);
}

#[test]
fn returns_true_when_only_item_in_array(){
    let item = 70;
    let array = [70];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, true);
}

#[test]
fn returns_false_when_empty_array(){
    let item = 70;
    let array = [];

    let result = binary_search(item, &array, None, None);

    assert_eq!(result, false);
}
