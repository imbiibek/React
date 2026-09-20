import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteBlog } from '@/redux/blogSlice'

const FormData = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const posts = useSelector((state) => state.blog.posts)

  const handleEditClick = (post) => {
    // send user to the form, telling it which post to edit
    navigate('/myform', { state: { editId: post.id } })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Redux Data</h2>

        {posts.length === 0 && (
          <p className="text-sm text-gray-400">No entries yet.</p>
        )}

        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div>
              <p>Name :- {post.name}</p>
              <p>Email :- {post.email}</p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleEditClick(post)}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => dispatch(deleteBlog(post.id))}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormData