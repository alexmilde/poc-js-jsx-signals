import { createElement, createFragment } from './core/Jsx.js'
import TodoList from './components/TodoList.jsx'

/** @jsx createElement */

document.getElementById('App').appendChild(<TodoList name="My TodoList App" />)
