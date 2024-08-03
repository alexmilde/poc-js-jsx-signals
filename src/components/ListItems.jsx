import { createElement, createFragment } from '../core/Jsx'
import { createSignal } from '../core/Signal'

/** @jsx createElement */
/*** @jsxFrag createFragment */

const template = (id, props, { todos }) => {
    return (
        <ul id={id}>
            {todos.value.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    )
}

const ListItems = (props) => {
    const id = "ListItems"

    const signals = {
        todos: props.todos,
    }

    const signalsToRerender = {
        todos: props.todos,
    }

    for (const key in signalsToRerender) {
        signalsToRerender[key].subscribe((newValue) => {
            document.getElementById(id)?.replaceWith(template(id, props, signals))
        },id)
    }

    return template(id, props, signals)
}

export default ListItems
