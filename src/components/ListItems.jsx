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
    const id = self.crypto.randomUUID()

    const signals = {
        todos: props.todos,
    }

    const signlasToRerender = {
        todos: props.todos,
    }

    for (const key in signlasToRerender) {
        signlasToRerender[key].subscribe((newValue) => {
            document.getElementById(id).replaceWith(template(id, props, signals))
        })
    }

    return template(id, props, signals)
}

export default ListItems
