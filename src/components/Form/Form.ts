export interface SubmitResult<T> extends CustomEvent<{
    data: T;
    event: Event
}> {

}