class Api::BenchesController < ApplicationController

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render @bench.errors.full_messages, status: 400
    end

  end

  def index
    @benches = Bench.all
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lag, :lng)
  end

end
