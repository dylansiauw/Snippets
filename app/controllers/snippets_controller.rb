class SnippetsController < ApplicationController
  # Switches to use snippet_layout.html.erb instead of application.html.erb
  layout 'snippet_layout'
  before_action :set_snippet, only: [:show, :edit, :update, :destroy]
  # impressionist :actions => [:show, :index]

  # GET /snippets
  # GET /snippets.json
  def index
    @snippets = Snippet.all.order(snippet_view_count: :desc)
  end

  # GET /snippets/1
  # GET /snippets/1.json
  def show
  end

  # GET /snippets/new
  def new
    @snippet = Snippet.new
    puts params[:user_email]
    @snippetuser = User.find_by(email: cookies[:user_email])
    puts @snippetuser.email
  end

  # GET /snippets/1/edit
  def edit
  end

  # POST /snippets
  # POST /snippets.json
  def create
    # Associate User to Snippets

    # puts params[:user_email]
    # @user = User.find_by(email: params[:user_email])
    # puts @user.first.email
    # puts params[:user_email]
    # @snippetuser = User.find_by(email: params[:user_email])
    # puts @snippetuser.email
    # @snippet = Snippet.new(snippet_params)
    @snippetuser = User.find_by(email: cookies[:user_email])
    @snippet = @snippetuser.snippets.create(snippet_params)

    respond_to do |format|
      if @snippet.save
        format.html { redirect_to @snippet, notice: 'Snippet was successfully created.' }
        format.json { render :show, status: :created, location: @snippet }
      else
        format.html { render :new }
        format.json { render json: @snippet.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /snippets/1
  # PATCH/PUT /snippets/1.json
  def update
    respond_to do |format|
      if @snippet.update(snippet_params)
        format.html { redirect_to @snippet, notice: 'Snippet was successfully updated.' }
        format.json { render :show, status: :ok, location: @snippet }
      else
        format.html { render :edit }
        format.json { render json: @snippet.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /snippets/1
  # DELETE /snippets/1.json
  def destroy
    @snippet.destroy
    respond_to do |format|
      format.html { redirect_to snippets_url, notice: 'Snippet was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_snippet
      @snippet = Snippet.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def snippet_params
      params.require(:snippet).permit(:snippet_title, :snippet_description, :snippet_content, :snippet_view_count)
    end
end
