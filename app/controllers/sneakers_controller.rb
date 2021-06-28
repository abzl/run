class SneakersController < ApplicationController
  before_action :set_sneaker, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy] #need to be logged in to create, update or delete

  # GET /sneakers
  def index
    @sneakers = Sneaker.all

    render json: @sneakers
  end

  # GET /sneakers/1
  def show
    render json: @sneaker, include: :reviews
  end

  # POST /sneakers
  def create
    @sneaker = Sneaker.new(sneaker_params)
    @sneaker.user = @current_user
    if @sneaker.save
      render json: @sneaker, status: :created
    else
      render json: @sneaker.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sneakers/1
  def update
    if @sneaker.update(sneaker_params)
      render json: @sneaker
    else
      render json: @sneaker.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sneakers/1
  def destroy
    @sneaker.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sneaker
      @sneaker = Sneaker.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sneaker_params
      params.require(:sneaker).permit(:name, :title, :price, :features, :img_url) # removed :user_id
    end
end
