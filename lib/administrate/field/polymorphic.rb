require_relative "associative"

module Administrate
  module Field
    class Polymorphic < Associative
      def self.searchable?
        false
      end

      def selectable_options
        collection
      end

      def include_blank
        @include_blank ||= options.fetch(:include_blank, true)
      end

      protected

      def associated_dashboard
        "#{data.class.name}Dashboard".constantize.new
      end

      private

      def collection
        @collection ||= options.fetch(:collection, [])
      end
    end
  end
end
