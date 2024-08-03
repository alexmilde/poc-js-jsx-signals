export const createSignal = (initialValue) => {
    let _value = initialValue
    let subscribers = {}

    function notify() {
        for (const key in subscribers) {
            subscribers[key](_value)
        }
    }

    return {
        get value() {
            return _value
        },
        set value(v) {
            _value = v
            notify()
        },
        // passing an id will overwrite listeners
        // usefull when dom element is removed
        // otherwise the listener would still be there
        // but there might be a better solution for this issue
        subscribe: (subscriber,id = self.crypto.randomUUID()) => {
            subscribers[id] = subscriber
        },
    }
}
