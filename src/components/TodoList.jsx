import { createElement, createFragment } from '../core/Jsx'
import { createSignal } from '../core/Signal'
import ListItems from './ListItems.jsx'

/** @jsx createElement */
/*** @jsxFrag createFragment */

const template = (id, { name }, { headline, todos }) => {
    return (
        <div id={id}>
            <h2>{name}</h2>
            <h3>{headline.value}</h3>
            <button onClick={() => (headline.value = 'Nice to have you.')}>Say Hello</button>
            <ListItems todos={todos} />
            <button onClick={() => (todos.value = [...todos.value, 'Take a nap'])}>Add Todo</button>
        </div>
    )
}

const TodoList = (props) => {
    const id = self.crypto.randomUUID()

    let headline = createSignal('Hello Todos')
    let todos = createSignal(['Buy Apples', 'Drink Milk'])

    const signals = {
        headline,
        todos,
    }

    const signalsToRerender = {
        headline,
    }

    for (const key in signalsToRerender) {
        signalsToRerender[key].subscribe((newValue) => {
            document.getElementById(id).replaceWith(template(id, props, signals))
        })
    }

    return template(id, props, signals)
}

export default TodoList
