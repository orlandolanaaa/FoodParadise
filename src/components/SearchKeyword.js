import React, { Fragment } from 'react'

const SearchKeyword = (props) => (
        <Fragment>

        <h5>Keyword</h5>
                      <div className="card">
                          <div className="card-body">
                          <div className="form-row">
                              <div className="col-10">
                              <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Type keyword i.e : restaurant's name, location, cuisine, etc."
                                  value={props.keyword}
                                  onChange={props.changeKeywordHandler}
                              />
                              </div>
                              <div className="col">
                              <button
                                  className="btn btn-primary"
                                  onClick={props.onClickAddToCriteria}
                              >
                                  Add to criteria
                              </button>
                              </div>
                          </div>
                          </div>
                      </div>
        </Fragment>   
)

export default SearchKeyword